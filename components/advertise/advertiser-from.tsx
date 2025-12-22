'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';

export function AdvertiserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    email: '',
    phoneNumber: '',
    website: '',
    advertisementType: '',
    budgetRange: '',
    campaignDuration: '',
    targetAudience: '',
    message: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      console.log('File:', file);
      
      // Reset form after successful submission
      setFormData({
        companyName: '',
        contactPersonName: '',
        email: '',
        phoneNumber: '',
        website: '',
        advertisementType: '',
        budgetRange: '',
        campaignDuration: '',
        targetAudience: '',
        message: '',
      });
      setFile(null);
      
      alert('Advertisement request submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Advertise with us</h1>
        <p className="text-sm text-muted-foreground">
          <span>Home/</span>
          <span className="text-blue-600">Advertise</span>
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Campaign Details</h2>
        <p className="text-gray-600 mb-8">Reach thousands of students and tech enthusiasts through our platform</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Company/Brand Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter full name"
                    value={formData.contactPersonName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPersonName: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Website/Social Media <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Advertisement Type <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.advertisementType}
                    onValueChange={(value) => setFormData({ ...formData, advertisementType: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select ad type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banner">Banner Ads</SelectItem>
                      <SelectItem value="video">Video Ads</SelectItem>
                      <SelectItem value="sponsored">Sponsored Content</SelectItem>
                      <SelectItem value="social">Social Media Campaign</SelectItem>
                      <SelectItem value="email">Email Marketing</SelectItem>
                      <SelectItem value="event">Event Sponsorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Budget Range <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Campaign Duration <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.campaignDuration}
                    onValueChange={(value) => setFormData({ ...formData, campaignDuration: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-week">1 Week</SelectItem>
                      <SelectItem value="2-weeks">2 Weeks</SelectItem>
                      <SelectItem value="1-month">1 Month</SelectItem>
                      <SelectItem value="3-months">3 Months</SelectItem>
                      <SelectItem value="6-months">6 Months</SelectItem>
                      <SelectItem value="12-months">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">
                    Target Audience <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="e.g., Students, Developers, Designers"
                    value={formData.targetAudience}
                    onChange={(e) =>
                      setFormData({ ...formData, targetAudience: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">
                    Additional Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your campaign goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Upload Creative Assets</label>
              <div
                className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center space-y-4 bg-blue-50/50"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="space-y-2">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-lg font-medium">Drag & Drop File</p>
                  <p className="text-sm text-muted-foreground">OR</p>
                  <label htmlFor="file-upload">
                    <Button type="button" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <span>
                        Browse File
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov,.zip"
                        />
                      </span>
                    </Button>
                  </label>
                  {file && (
                    <p className="text-sm text-green-600 mt-2 font-medium">
                      {file.name}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
