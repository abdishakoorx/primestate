

import { Search, Shield, Users } from 'lucide-react'
import React from 'react'

function FeaturedSection() {
    return (
        <section className="py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                        Why Choose Primestate?
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                        We make property management simple, efficient, and transparent for everyone involved.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="p-8 text-center shadow-lg rounded-2xl bg-gradient-card">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl">
                            <Search className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Smart Search</h3>
                        <p className="text-muted-foreground">
                            Advanced filters and AI-powered recommendations to find exactly what you're looking for.
                        </p>
                    </div>

                    <div className="p-8 text-center shadow-lg rounded-2xl bg-gradient-card">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-2xl">
                            <Shield className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Verified Listings</h3>
                        <p className="text-muted-foreground">
                            All properties are verified and agents are thoroughly vetted for your security and peace of mind.
                        </p>
                    </div>

                    <div className="p-8 text-center shadow-lg rounded-2xl bg-gradient-card">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Expert Support</h3>
                        <p className="text-muted-foreground">
                            Professional agents and 24/7 customer support to guide you through every step.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection