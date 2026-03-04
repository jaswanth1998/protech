import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LuCircleCheck } from 'react-icons/lu';
import { services } from '@/data/services';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }));

function ContactForm({ preselectedService = '' }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: preselectedService,
    },
  });

  async function onSubmit(_data) {
    // PLACEHOLDER — integrate with Formspree, EmailJS, or backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary-muted p-8 text-center md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
          <LuCircleCheck className="h-8 w-8 text-primary-dark" />
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold text-navy-dark">Thank You!</h3>
        <p className="mt-3 text-lg text-slate">
          Your message has been sent successfully. We&rsquo;ll get back to you within 1 business
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="name"
          placeholder="John Smith"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (416) 555-0199"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          label="Company Name"
          name="company"
          placeholder="Your Company"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>
      <Select
        label="Service Interest"
        name="service"
        options={serviceOptions}
        placeholder="Select a service..."
        error={errors.service?.message}
        {...register('service')}
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your project or requirements..."
        required
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;
