"use client"

import { Button } from '@/components/ui/button'
import { supabase } from '@/Utils/supabase/client'
import { LoaderCircle, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function AgentFinder() {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(true)

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
                    count: 1
                }
            } else {
                agentsMap[key].count += 1
            }
        })
        return Object.values(agentsMap)
    }

    if (loading) {
        return (
            <div className="container px-4 py-8 mx-auto">
                <div className="w-48 h-8 mb-6 bg-gray-700 rounded"></div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="overflow-hidden bg-gray-800 border border-gray-700 rounded-lg shadow-lg animate-pulse">
                            <div className="h-48 bg-gray-700"></div>
                            <div className="p-4">
                                <div className="w-3/4 h-6 mb-2 bg-gray-700 rounded"></div>
                                <div className="w-1/2 h-4 mb-2 bg-gray-700 rounded"></div>
                                <div className="w-1/4 h-4 mb-4 bg-gray-700 rounded"></div>
                                <div className="flex space-x-2">
                                    <div className="flex-1 h-10 bg-gray-700 rounded"></div>
                                    <div className="flex-1 h-10 bg-gray-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-white">Our Agents</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {agents.map((agent, index) => (
                    <div key={index} className="overflow-hidden bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src={agent.profileImage || '/default-avatar.png'}
                                alt={agent.username}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="mb-2 text-xl font-semibold text-white">{agent.username}</h2>
                            <p className="mb-2 text-gray-400">{agent.createdby}</p>
                            <p className="mb-4 text-gray-500">{agent.count} Properties</p>
                            <div className="flex space-x-2">
                                <Button className="flex-1 text-white bg-blue-600 hover:bg-blue-700">
                                    <Mail className="w-4 h-4 mr-2" /> Email
                                </Button>
                                <Button className="flex-1 text-white bg-green-600 hover:bg-green-700">
                                    <Phone className="w-4 h-4 mr-2" /> Call
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AgentFinder