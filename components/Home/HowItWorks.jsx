import { CheckCircle, Search, Home, Users, FileText, Key } from "lucide-react";

function HowItWorks() {
    const agentSteps = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Create Your Profile",
            description: "Sign up and build a comprehensive agent profile with your expertise and credentials."
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: "List Properties",
            description: "Add properties with detailed descriptions, high-quality photos, and competitive pricing."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Connect with Clients",
            description: "Respond to inquiries and schedule viewings with potential buyers and renters."
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Close Deals",
            description: "Use our tools to manage the entire process from offer to closing."
        }
    ];

    const buyerSteps = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Search Properties",
            description: "Use our advanced filters to find properties that match your exact requirements."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Contact Agents",
            description: "Connect directly with verified agents and schedule property viewings."
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: "View Properties",
            description: "Take virtual or in-person tours to find your perfect home or investment."
        },
        {
            icon: <Key className="w-8 h-8" />,
            title: "Secure Your Property",
            description: "Submit offers and complete the purchase or rental process with expert guidance."
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                        How Primestate Works
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                        Whether you're an agent looking to grow your business or a buyer/renter searching for the perfect property, we make the process simple and efficient.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* For Agents */}
                    <div>
                        <h3 className="mb-8 text-2xl font-bold text-center text-foreground">For Real Estate Agents</h3>
                        <div className="space-y-8">
                            {agentSteps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl text-primary">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-2">
                                            <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                                                {index + 1}
                                            </span>
                                            <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                                        </div>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* For Buyers/Renters */}
                    <div>
                        <h3 className="mb-8 text-2xl font-bold text-center text-foreground">For Buyers & Renters</h3>
                        <div className="space-y-8">
                            {buyerSteps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-2xl text-secondary">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-2">
                                            <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground">
                                                {index + 1}
                                            </span>
                                            <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                                        </div>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;