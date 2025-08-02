import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function CTASection() {
    return (
        <section className="py-20 bg-gradient-primary text-primary-foreground">
            <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Ready to List Your Property?
                </h2>
                <p className="mb-8 text-xl text-primary-foreground/90">
                    Join thousands of successful landlords and agents who trust Primestate to showcase their properties.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/add-new-listing">
                        <Button variant="secondary" size="lg">
                            List Your Property
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="outline" size="lg" className="text-white bg-white/10 border-white/30 hover:bg-white/20">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTASection