import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Jennifer Lai",
            avatar: "https://plus.unsplash.com/premium_photo-1704757142665-0e789647cba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxvbmUlMjBsYWR5JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
            rating: 4,
            role: "First-time Home Buyer",
            review: "Primestate made finding my first home incredibly easy. The search filters were perfect, and my agent Sarah was amazing throughout the entire process. Highly recommended!",
            location: "Nairobi, Kenya"
        },
        {
            id: 2,
            name: "David Kamau",
            avatar: "https://images.unsplash.com/photo-1674505441276-3ef7c441d973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwbWFuJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
            rating: 4.7,
            role: "Investment Property Owner",
            review: "As a real estate investor, I've used many platforms. Primestate stands out with its comprehensive market data and responsive agent network. Found 3 great investment properties here!",
            location: "Mombasa, Kenya"
        },
        {
            id: 3,
            name: "Lisa Wanjiru",
            avatar: "https://images.unsplash.com/photo-1632828167055-126c0c57ecff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxvbmUlMjBsYWR5JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
            rating: 4.8,
            role: "Real Estate Agent",
            review: "The lead quality on Primestate is exceptional. I've closed more deals in 6 months here than I did in 2 years on other platforms. The tools make managing clients so much easier.",
            location: "Kilifi, Kenya"
        },
        {
            id: 4,
            name: "Michael Salim",
            avatar: "https://images.unsplash.com/photo-1586232880922-25f9b9695ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9uZSUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
            rating: 4.9,
            role: "Rental Tenant",
            review: "Found the perfect apartment in just 2 weeks! The virtual tours saved me so much time, and the application process was seamless. Primestate really delivers on their promises.",
            location: "Kisumu, Kenya"
        },
        {
            id: 5,
            name: "Sarah Ali",
            avatar: "https://images.unsplash.com/photo-1613002143253-8587d9ad2004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxvbmUlMjBsYWR5JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
            rating: 4,
            role: "Property Manager",
            review: "Managing multiple properties is challenging, but Primestate's dashboard makes it simple. Tenant screening is thorough, and the support team is always helpful when needed.",
            location: "Eldoret, Kenya"
        },
        {
            id: 6,
            name: "Robert Ngugi",
            avatar: "https://images.unsplash.com/photo-1621972659738-598cd8f7c37c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG9uZSUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
            rating: 4.6,
            role: "Home Seller",
            review: "Sold my house 3 weeks faster than expected! The marketing reach is impressive, and my agent kept me informed every step of the way. Excellent experience overall.",
            location: "Nairobi, Kenya"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
            />
        ));
    };

    return (
        <section className="py-20 bg-background">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                        What Our Clients Say
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                        Don't just take our word for it. Here's what thousands of satisfied clients have to say about their Primestate experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="h-full">
                            <CardContent className="flex flex-col h-full p-6">
                                <div className="flex items-center mb-4 space-x-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </div>

                                <div className="flex mb-4 space-x-1">
                                    {renderStars(testimonial.rating)}
                                </div>

                                <p className="flex-1 leading-relaxed text-muted-foreground">
                                    "{testimonial.review}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center p-6 space-x-6 bg-muted rounded-2xl">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">4.8/5</div>
                            <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                        <div className="w-px h-12 bg-border"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">10,000+</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                        <div className="w-px h-12 bg-border"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">98%</div>
                            <div className="text-sm text-muted-foreground">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;