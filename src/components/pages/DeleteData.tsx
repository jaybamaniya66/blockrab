import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Mail, Shield, Clock, FileText } from "lucide-react";

const DeleteData = () => {
  const [formData, setFormData] = useState({
    facebookId: "",
    email: "",
    reason: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/delete-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          facebookId: "",
          email: "",
          reason: "",
          additionalInfo: ""
        });
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Network Error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black/10 via-gray-800/10 to-black/10 dark:from-white/10 dark:via-gray-200/10 dark:to-white/10 py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white animate-fade-in">
            User Data <span className="gradient-text">Deletion</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Request the deletion of your personal data from our servers in compliance with GDPR and Meta policies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Shield className="h-5 w-5" />
                  Your Rights
                </CardTitle>
                <CardDescription>
                  Under GDPR and Meta policies, you have the right to request deletion of your personal data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Right to erasure ("right to be forgotten")</li>
                  <li>• Complete removal of your data from our servers</li>
                  <li>• Confirmation of deletion within 30 days</li>
                  <li>• No charge for this service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Clock className="h-5 w-5" />
                  Process Timeline
                </CardTitle>
                <CardDescription>
                  We process deletion requests promptly and efficiently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Request received within 24 hours</li>
                  <li>• Verification process: 1-3 business days</li>
                  <li>• Data deletion: 7-14 business days</li>
                  <li>• Confirmation email sent upon completion</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Deletion Form */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Request Data Deletion
              </CardTitle>
              <CardDescription>
                Please provide the required information to process your data deletion request. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" && (
                <Alert className="mb-6 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    Your deletion request has been submitted successfully! We'll process your request within 7-14 business days and send you a confirmation email.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800 dark:text-red-200">
                    There was an error submitting your request. Please try again or contact us directly at support@blockrabbits.com
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="facebookId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Facebook ID * <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="facebookId"
                      name="facebookId"
                      type="text"
                      placeholder="Enter your Facebook ID"
                      value={formData.facebookId}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      You can find your Facebook ID in your profile URL or settings
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address * <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      We'll send confirmation to this email address
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Reason for Deletion (Optional)
                  </label>
                  <Textarea
                    id="reason"
                    name="reason"
                    placeholder="Please let us know why you're requesting data deletion..."
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information (Optional)
                  </label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Any additional information that might help us process your request..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full"
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">What happens after you submit?</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• We'll verify your identity using your Facebook ID</li>
                    <li>• We'll search for and identify all your data in our systems</li>
                    <li>• We'll permanently delete your data from our servers</li>
                    <li>• We'll send you a confirmation email with details</li>
                    <li>• We'll also delete your data from any third-party services we use</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.facebookId || !formData.email}
                  className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Deletion Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Alternative Contact Methods
              </CardTitle>
              <CardDescription>
                If you prefer to contact us directly, you can use any of these methods:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email Contact</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Primary:</strong> support@blockrabbits.com
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Privacy:</strong> privacy@blockrabbits.com
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Response Time:</strong> Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp Contact</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Number:</strong> +91 9664954421
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM IST
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Response Time:</strong> Within 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What data will be deleted?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We will delete all personal data associated with your Facebook ID, including contact information, 
                  project details, communication history, and any other personal information stored in our systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the deletion process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We aim to complete the deletion process within 7-14 business days. You'll receive a confirmation 
                  email once the deletion is complete.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my deletion request?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can cancel your deletion request within 24 hours of submission by contacting us directly. 
                  After 24 hours, the deletion process begins and cannot be reversed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will I receive confirmation of deletion?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you will receive a detailed confirmation email once your data has been successfully deleted 
                  from our servers, including a list of what was deleted.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I don't have a Facebook ID?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  If you don't have a Facebook ID, please contact us directly via email or WhatsApp with your 
                  email address and we'll help you identify and delete your data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need Help with Your Request?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to assist you with any questions about data deletion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@blockrabbits.com"
              className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
            >
              Email Support
            </a>
            <a
              href="https://wa.me/9664954421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteData; 