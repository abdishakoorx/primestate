import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp, Heart, Shield, Home, Clock, Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    const stats = [
        { number: "10K+", label: "Properties Listed" },
        { number: "500+", label: "Trusted Agents" },
        { number: "25K+", label: "Happy Clients" },
        { number: "50+", label: "Cities Served" }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Client-Focused",
            description: "Every decision we make is centered around providing the best experience for our clients."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Trust & Transparency",
            description: "We believe in honest communication and transparent processes throughout every transaction."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Innovation",
            description: "We continuously improve our platform with cutting-edge technology and user feedback."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "We strive for excellence in everything we do, from customer service to platform performance."
        }
    ];

    const features = [
        {
            icon: <Clock className="w-6 h-6 text-primary" />,
            title: "Smart Property Management",
            description: "Our advanced algorithms help match properties with the right tenants and buyers efficiently."
        },
        {
            icon: <Home className="w-6 h-6 text-secondary" />,
            title: "Expert Curation",
            description: "We combine technology with insights from experienced real estate professionals to provide the best service."
        },
        {
            icon: <Shield className="w-6 h-6 text-yellow-500" />,
            title: "Personalized Service",
            description: "Our platform adapts to your preferences and provides personalized property recommendations."
        }
    ];

    const coreValues = [
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Community",
            description: "We believe in building strong relationships and fostering connections within the real estate community."
        },
        {
            icon: <Target className="w-8 h-8 text-secondary" />,
            title: "Precision",
            description: "We focus on accuracy and attention to detail in every property listing and transaction."
        },
        {
            icon: <Star className="w-8 h-8 text-green-600" />,
            title: "Excellence",
            description: "We're committed to providing the highest quality property management and real estate services."
        },
        {
            icon: <MapPin className="w-8 h-8 text-destructive" />,
            title: "Local Expertise",
            description: "We value deep knowledge of local markets and neighborhoods to serve our clients better."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-primary text-primary-foreground">
                <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                        About Primestate
                    </h1>
                    <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90">
                        Revolutionizing real estate by connecting people with their perfect properties through innovative technology and exceptional service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                            <Home className="w-4 h-4 mr-2" />
                            Smart Listings
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            50+ Cities
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                            <Users className="w-4 h-4 mr-2" />
                            Trusted Network
                        </span>
                    </div>
                    <Badge variant="secondary" className="px-6 py-2 text-lg">
                        Est. 2020
                    </Badge>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="mb-2 text-3xl font-bold md:text-4xl text-primary">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-8 bg-primary/10 rounded-2xl">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-foreground">
                                Our Mission
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                                To make real estate transactions simple, transparent, and accessible for everyone. We believe that finding the perfect property or the right tenant should be an exciting journey, not a stressful ordeal.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                                Through cutting-edge technology and human expertise, we're building the future of real estate. Our platform learns from market trends and user preferences to provide personalized recommendations that match your specific needs.
                            </p>
                            <div className="flex items-center">
                                <div className="flex items-center justify-center rounded-full h-14 w-14 bg-secondary/10">
                                    <Home className="h-7 w-7 text-secondary" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-primary">Find Your Perfect Home</h4>
                                    <p className="text-sm text-muted-foreground">Personalized property matching, exceptional experiences</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80"
                                    width={600}
                                    height={400}
                                    alt="Modern property exterior"
                                    className="object-cover w-full h-96"
                                />
                            </div>
                            <div className="absolute max-w-xs p-4 rounded-lg shadow-lg -bottom-6 -left-6 bg-accent">
                                <p className="font-serif text-sm italic text-accent-foreground">
                                    "Home is not where you are born; home is where all your attempts to escape cease."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-20 bg-muted">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl text-foreground">
                        What Sets Us Apart
                    </h2>
                    <p className="mb-16 text-xl text-center text-muted-foreground">
                        The innovative features that make Primestate different
                    </p>

                    <div className="grid gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <Card key={index} className="h-full text-center transition-shadow duration-300 hover:shadow-lg">
                                <CardContent className="p-8">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-full bg-primary/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mb-4 text-xl font-semibold text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {coreValues.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10">
                                    {value.icon}
                                </div>
                                <h3 className="mb-4 text-lg font-semibold text-foreground">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-muted">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl text-foreground">
                        Meet the Creator
                    </h2>
                    <p className="mb-16 text-xl text-center text-muted-foreground">
                        The passionate developer behind Primestate
                    </p>

                    <div className="flex flex-col items-center gap-10 overflow-hidden shadow-lg bg-background md:flex-row md:items-start rounded-xl">
                        <div className="flex-shrink-0 w-full h-64 md:w-1/2 md:h-auto">
                            <Image
                                src="/founder.jpg"
                                width={500}
                                height={500}
                                alt="Portrait of Abdishakoor Hassan"
                                className="object-cover w-full h-full rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                            />
                        </div>

                        <div className="p-8 space-y-4 text-center md:p-10 md:text-left">
                            <h3 className="text-2xl font-semibold text-foreground">Abdishakoor Hassan</h3>
                            <p className="text-sm font-medium uppercase text-primary">Software Engineer</p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                I'm a software engineer with 4 years of experience in building web applications. I graduated from Kenyatta University and have a strong passion for solving real-world problems through clean and efficient code.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Primestate is a personal initiative I designed and developed independently. It reflects my interest in real estate technology, UI/UX design, and full-stack development — from concept to deployment.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                I'm always looking to grow, collaborate, and build meaningful software experiences that make a real difference in people's lives.
                            </p>

                            <div className="flex justify-center gap-4 pt-4 md:justify-start">
                                <Link
                                    href="https://www.linkedin.com/in/abdishakoorx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm font-medium text-white transition rounded bg-primary hover:bg-primary/90"
                                >
                                    LinkedIn
                                </Link>
                                <Link
                                    href="https://abdishakoorx.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm font-medium transition border rounded text-primary border-primary hover:bg-primary hover:text-white"
                                >
                                    Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Additional */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <h3 className="mb-2 text-4xl font-bold">99%</h3>
                            <p className="text-primary-foreground/80">Satisfaction Rate</p>
                        </div>
                        <div className="text-center">
                            <h3 className="mb-2 text-4xl font-bold">24/7</h3>
                            <p className="text-primary-foreground/80">Customer Support</p>
                        </div>
                        <div className="text-center">
                            <h3 className="mb-2 text-4xl font-bold">100+</h3>
                            <p className="text-primary-foreground/80">Partner Agencies</p>
                        </div>
                        <div className="text-center">
                            <h3 className="mb-2 text-4xl font-bold">5★</h3>
                            <p className="text-primary-foreground/80">Average Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
                    <div className="p-8 text-center text-white bg-gradient-secondary rounded-2xl md:p-12">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                            Ready to Find Your Perfect Property?
                        </h2>
                        <p className="max-w-2xl mx-auto mb-8 text-xl opacity-90">
                            Join thousands of satisfied clients who have found their dream properties with Primestate's innovative platform.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/buy">
                                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                                    Start Browsing Properties
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="text-gray-800 bg-white/10 border-white/30 hover:bg-white/20">
                                    Get in Touch
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;