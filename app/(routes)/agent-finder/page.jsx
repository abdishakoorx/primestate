"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/Utils/supabase/client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AgentCard, { AgentCardLoading } from '@/components/custom/AgentCard'
import LoadingComponent from '@/components/custom/LoadingComponent'
import Link from 'next/link'
import { SignInButton } from '@clerk/nextjs'

function AgentFinder() {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        getAgents()
    }, [])

    const getAgents = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('listing')
            .select('*', { count: 'exact' })

        if (error) {
            console.error('Error fetching agents:', error)
        } else if (data) {
            const agentsWithCounts = calculateListingCounts(data)
            setAgents(agentsWithCounts)
        }
        setLoading(false)
    }

    const calculateListingCounts = (data) => {
        const agentsMap = {}
        data.forEach(agent => {
            const key = agent.createdby
            if (!agentsMap[key]) {
                agentsMap[key] = {
                    ...agent,
                    listingCount: 1
                }
            } else {
                agentsMap[key].listingCount += 1
            }
        })
        return Object.values(agentsMap)
    }

    // Filter agents based on search query
    const filteredAgents = agents.filter(agent =>
        agent.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.createdby?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (loading) {
        return (
            <AgentCardLoading />
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="py-16 bg-gradient-hero text-primary-foreground">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            Find Your Perfect Agent
                        </h1>
                        <p className="mb-8 text-xl text-white/90">
                            Connect with experienced, verified real estate professionals
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl p-6 mx-auto shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl">
                            <div className="flex gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or email..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Results Header */}
                <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
                    <div>
                        <h2 className="mb-2 text-2xl font-bold text-foreground">Our Agents</h2>
                        <p className="text-muted-foreground">
                            {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''} found
                        </p>
                    </div>

                    {searchQuery && (
                        <Badge variant="secondary" className="px-3 py-1">
                            Searching for: "{searchQuery}"
                        </Badge>
                    )}
                </div>

                {/* Agent Grid */}
                {filteredAgents.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="mb-4 text-6xl">🔍</div>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                            No agents found
                        </h3>
                        <p className="mb-4 text-muted-foreground">
                            {searchQuery
                                ? `No agents match "${searchQuery}". Try a different search term.`
                                : "No agents are currently available."
                            }
                        </p>
                        {searchQuery && (
                            <Button
                                variant="outline"
                                onClick={() => setSearchQuery("")}
                            >
                                Clear search
                            </Button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredAgents.map((agent, index) => (
                            <AgentCard
                                key={agent.id || index}
                                id={agent.id}
                                username={agent.username}
                                profileImage={agent.profileImage}
                                createdby={agent.createdby}
                                listingCount={agent.listingCount}
                            />
                        ))}
                    </div>
                )}

                {/* Pagination - Only show if more than 9 agents */}
                {filteredAgents.length > 9 && (
                    <div className="flex justify-center mt-12">
                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Previous</Button>
                            <Button variant="default" size="sm">1</Button>
                            <Button variant="outline" size="sm">2</Button>
                            <Button variant="outline" size="sm">3</Button>
                            <Button variant="outline" size="sm">Next</Button>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-gradient-secondary text-secondary-foreground">
                <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        Are You a Real Estate Agent?
                    </h2>
                    <p className="mb-8 text-xl text-white/90">
                        Join our platform and connect with thousands of potential clients looking for their perfect property.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <SignInButton mode="modal">
                            <Button variant="outline" size="lg" className="text-white bg-white/10 border-white/30 hover:bg-white/20">Join as Agent </Button>
                        </SignInButton>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="text-white bg-white/10 border-white/30 hover:bg-white/20">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentFinder