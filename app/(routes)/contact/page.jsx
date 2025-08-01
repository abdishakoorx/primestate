"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, Send, Users, Headphones, Home, Building } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'buying', label: 'Property Buying', icon: <Home className="w-4 h-4" /> },
    { value: 'selling', label: 'Property Selling', icon: <Building className="w-4 h-4" /> },
    { value: 'renting', label: 'Property Rental', icon: <Users className="w-4 h-4" /> },
    { value: 'support', label: 'Technical Support', icon: <Headphones className="w-4 h-4" /> },
    { value: 'partnership', label: 'Partnership', icon: <MessageCircle className="w-4 h-4" /> },
    { value: 'other', label: 'Other Inquiry', icon: <MessageCircle className="w-4 h-4" /> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        inquiryType: '',
        message: ''
      });
      toast.success("Your message has been sent successfully!");

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+254 722 280 781",
      description: "Call us directly for immediate assistance",
      available: "Mon-Fri, 9AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "abdishakoor145@gmail.com",
      description: "Send us an email anytime",
      available: "24/7 Response"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Live Chat",
      content: "Start Live Chat",
      description: "Chat with our support team",
      available: "Mon-Fri, 9AM-6PM"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Headquarters",
      address: "Nairobi, Kenya",
      details: "Visit our main office for in-person consultations"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      address: "Monday - Friday: 9:00 AM - 6:00 PM",
      details: "Saturday: 10:00 AM - 4:00 PM\nSunday: Closed"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Primestate</h1>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Ready to find your perfect property or need assistance? Our expert team is here to help you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Online Support
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Expert Guidance
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Instant Response
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Get in Touch Instantly</h2>
            <p className="text-lg text-muted-foreground">Choose your preferred way to connect with us</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl">
                    {method.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{method.title}</h3>
                  <p className="mb-2 font-medium text-primary">{method.content}</p>
                  <p className="mb-2 text-sm text-muted-foreground">{method.description}</p>
                  <Badge variant="outline" className="text-xs">{method.available}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-3xl font-bold text-foreground">Let's Connect</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Whether you're buying, selling, or renting, our dedicated team is ready to provide personalized assistance tailored to your needs.
              </p>
              
              <div className="space-y-6">
                {officeInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-foreground">{info.title}</h3>
                          <p className="mb-1 font-medium text-muted-foreground">{info.address}</p>
                          <p className="text-sm whitespace-pre-line text-muted-foreground">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* FAQ Link */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-foreground">Need Quick Answers?</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Check out our frequently asked questions for instant solutions to common inquiries.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/">View FAQ</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 mb-6 text-green-800 border border-green-200 rounded-lg bg-green-50">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-4 mb-6 text-red-800 border border-red-200 rounded-lg bg-red-50">
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to send message. Please try again.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-foreground">
                          First Name *
                        </label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-foreground">
                          Last Name *
                        </label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+254 700 000 000" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block mb-2 text-sm font-medium text-foreground">
                        Type of Inquiry *
                      </label>
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {inquiryTypes.map((type) => (
                          <label key={type.value} className="cursor-pointer">
                            <input
                              type="radio"
                              name="inquiryType"
                              value={type.value}
                              checked={formData.inquiryType === type.value}
                              onChange={handleInputChange}
                              className="sr-only"
                              required
                            />
                            <div className={`p-3 border rounded-lg text-center transition-colors ${
                              formData.inquiryType === type.value 
                                ? 'border-primary bg-primary/5 text-primary' 
                                : 'border-border hover:border-primary/50'
                            }`}>
                              <div className="flex items-center justify-center mb-1">
                                {type.icon}
                              </div>
                              <span className="text-xs font-medium">{type.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry" 
                        required 
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry, including any specific requirements or questions you may have..." 
                        rows={6}
                        required
                      />
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>* Required fields</p>
                      <p className="mt-1">
                        By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Need Immediate Assistance?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            For urgent matters or immediate support, don't hesitate to call us directly.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: +254 722 280 781
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;