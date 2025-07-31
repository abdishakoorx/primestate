"use client"
import { ArrowRight, Phone, Mail, MapPin, Building } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { supabase } from '@/Utils/supabase/client';
import AgentCard, { AgentCardLoading } from '../custom/AgentCard';

function AgentsSection() {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAgents();
    }, []);

    const getAgents = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('listing')
                .select('*', { count: 'exact' })
                .eq('active', true)
                .limit(6); // Limit to top 6 agents for homepage

            if (error) {
                console.error('Error fetching agents:', error);
                return;
            }

            if (data) {
                const agentsWithCounts = calculateListingCounts(data);
                // Limit to top 6 agents for homepage
                const topAgents = agentsWithCounts
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 6);
                setAgents(topAgents);
            }
        } catch (error) {
            console.error('Error in getAgents:', error);
        } finally {
            setLoading(false);
        }
    };

    const calculateListingCounts = (data) => {
        const agentsMap = {};

        data.forEach(listing => {
            const key = listing.createdby;
            if (!agentsMap[key]) {
                agentsMap[key] = {
                    id: listing.createdby,
                    username: listing.username,
                    profileImage: listing.profileImage,
                    createdby: listing.createdby,
                    count: 1
                };
            } else {
                agentsMap[key].count += 1;
            }
        });

        return Object.values(agentsMap);
    };

    return (
        <section className="py-20 bg-background">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col mb-12 space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                            Meet Our Agents
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Professional real estate experts ready to help you
                        </p>
                    </div>
                    <Link href="/agent-finder">
                        <Button variant="outline">
                            View All Agents
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
                    {loading ? (
                        // Show 6 loading cards with individual loading components
                        [...Array(6)].map((_, index) => (
                            <AgentCardLoading key={`loading-${index}`} />
                        ))
                    ) : agents.length === 0 ? (
                        // Show empty state in the center spanning all columns
                        <div className="flex items-center justify-center h-64 col-span-full">
                            <div className="text-lg text-muted-foreground">No agents available at the moment.</div>
                        </div>
                    ) : (
                        // Show actual agent cards
                        agents.map((agent) => (
                            <AgentCard
                                key={agent.id}
                                id={agent.id}
                                username={agent.username}
                                profileImage={agent.profileImage}
                                createdby={agent.createdby}
                                listingCount={agent.count}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default AgentsSection;