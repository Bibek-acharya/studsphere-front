'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export function PartnershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPersonName: '',
    type: '',
    email: '',
    website: '',
    contactNumber: '',
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
        organizationName: '',
        contactPersonName: '',
        type: '',
        email: '',
        website: '',
        contactNumber: '',
      });
      setFile(null);
      
      alert('Partnership request submitted successfully!');
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
        <h1 className="text-5xl font-bold mb-4">Partner with us</h1>
        <p className="text-sm text-muted-foreground">
          <span>Home/</span>
          <span className="text-blue-600">Contact Us</span>
        </p>
      </div>

      <div className="bg-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Organization Details</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Organization/Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Ex.Studsphere"
                    value={formData.organizationName}
                    onChange={(e) =>
                      setFormData({ ...formData, organizationName: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Contact Person Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Ex.Studsphere"
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
                    Type <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Partner</SelectItem>
                      <SelectItem value="educational">Educational Institution</SelectItem>
                      <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                      <SelectItem value="government">Government Organization</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Ex.Studsphere"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Website/Social media Link <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="url"
                    placeholder="Ex.Studsphere"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="Ex.Studsphere"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, contactNumber: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Upload Document</label>
              <div
                className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center space-y-4"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="space-y-2">
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
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                      </span>
                    </Button>
                  </label>
                  {file && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {file.name}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
