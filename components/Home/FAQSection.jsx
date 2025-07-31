import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FAQSection() {
    const landlordFAQs = [
        {
            question: "How do I list my property on Primestate?",
            answer: "Simply create an account, click 'Add New Listing', and fill out the property details. Our step-by-step guide will walk you through adding photos, descriptions, and pricing."
        },
        {
            question: "What fees do you charge landlords?",
            answer: "We offer competitive commission rates starting at 2.5%. The exact fee depends on your service package and location. Contact us for a personalized quote."
        },
        {
            question: "How do you verify potential tenants?",
            answer: "We conduct comprehensive background checks including credit history, employment verification, and previous rental references for all applicants."
        }
    ];

    const agentFAQs = [
        {
            question: "How can I join Primestate as an agent?",
            answer: "Create your agent profile, upload your license and credentials, and get verified within 24-48 hours. We welcome licensed real estate professionals."
        },
        {
            question: "What tools do you provide for agents?",
            answer: "We provide CRM tools, lead management, automated scheduling, digital contracts, and comprehensive analytics to help grow your business."
        },
        {
            question: "How do leads get distributed?",
            answer: "Leads are distributed based on location, expertise, availability, and client preferences. Premium agents get priority access to high-value leads."
        }
    ];

    const userFAQs = [
        {
            question: "Is Primestate free to use for buyers and renters?",
            answer: "Yes! Browsing listings, contacting agents, and using our search tools is completely free for buyers and renters."
        },
        {
            question: "How do I schedule a property viewing?",
            answer: "Click on any property listing and use the 'Schedule Viewing' button to book directly with the agent. You'll receive confirmation within hours."
        },
        {
            question: "Are all listings verified?",
            answer: "Yes, we verify all property listings and agents to ensure authenticity. Look for the verified badge on listings and agent profiles."
        },
        {
            question: "Can I save my favorite properties?",
            answer: "Absolutely! Create an account to save favorites, set up alerts for new listings, and track your viewing history."
        }
    ];

    return (
        <section className="py-20 bg-muted">
            <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Find answers to common questions about using Primestate
                    </p>
                </div>

                <div className="space-y-12">
                    {/* For Landlords */}
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-foreground">For Landlords</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {landlordFAQs.map((faq, index) => (
                                <AccordionItem key={index} value={`landlord-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* For Agents */}
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-foreground">For Real Estate Agents</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {agentFAQs.map((faq, index) => (
                                <AccordionItem key={index} value={`agent-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* For Users */}
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-foreground">For Buyers & Renters</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {userFAQs.map((faq, index) => (
                                <AccordionItem key={index} value={`user-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;