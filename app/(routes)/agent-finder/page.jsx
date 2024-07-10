"use client"
import { Button } from '@/components/ui/button';
import { supabase } from '@/Utils/supabase/client';
import { ErrorMessage } from 'formik';
import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function AgentFinder() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        getAgents();
    }, []);

    const getAgents = async () => {
        const { data } = await supabase
                .from('listing')
                .select('*', { count: 'exact' }); 

            if (data) {
                const agentsWithCounts = calculateListingCounts(data);
                setAgents(agentsWithCounts);
            }
    };

    const calculateListingCounts = (data) => {
        const agentsMap = {};

        data.forEach(agent => {
            const key = agent.createdby;
            if (!agentsMap[key]) {
                agentsMap[key] = {
                    ...agent,
                    count: 1 
                };
            } else {
                agentsMap[key].count += 1; 
            }
        });

        return Object.values(agentsMap);
    };

    return (
        <div className="grid grid-cols-1 gap-4 px-140 p-14 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, index) => (
                <div key={index} className="p-4 transition-shadow duration-200 bg-gray-900 border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <div className="mb-4">
                        <Image
                            src={agent.profileImage}
                            alt={`${agent.username}'s profile image`}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-secondary">{agent.username}</h3>
                        <p className="mb-1 text-sm text-gray-500"> {agent.createdby}</p>
                        <p className="text-sm text-gray-500">{agent.count} Listings</p>
                        <div className="mt-6">
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full text-black bg-tertiary hover:bg-opacity-80 hover:bg-tertiary"
                            >Contact Agent                            
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AgentFinder;
