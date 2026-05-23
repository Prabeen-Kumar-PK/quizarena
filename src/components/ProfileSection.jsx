import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Save, UserPlus } from 'lucide-react'
import { ActionButton } from './ActionButton'
import { InputField } from './InputField'
import { ProfileCard } from './ProfileCard'
import { SectionHeading } from './SectionHeading'

export function ProfileSection({ onSaveProfile, profile }) {
  const {
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    register,
    reset,
  } = useForm({ defaultValues: profile })

  useEffect(() => {
    reset(profile)
  }, [profile, reset])

  return (
    <section className="app-section profile-section reveal-section" id="register">
      <div>
        <SectionHeading
          eyebrow="Local register"
          icon={UserPlus}
          title="Create Your profile on this device."
         
        />
        <ProfileCard profile={profile} />
      </div>

      <form className="profile-form" onSubmit={handleSubmit(onSaveProfile)}>
        <InputField
          error={errors.fullName}
          label="Full name"
          placeholder="Aarav Sen"
          {...register('fullName', { required: 'Name is required' })}
        />
        <InputField
          error={errors.email}
          label="Email"
          placeholder="you@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              message: 'Enter a valid email address',
              value: /^\S+@\S+\.\S+$/,
            },
          })}
        />
        <InputField
          label="Hero image URL"
          placeholder="https://your-image-url-here"
          {...register('heroImage')}
        />
     
        <ActionButton icon={Save} type="submit">
          Save profile
        </ActionButton>

        <p className="form-note">
          {isSubmitSuccessful || profile.fullName
            ? `Saved  ${profile.fullName || 'this device'}.`
            : 'Profile data is waiting for your first save.'}
        </p>
      </form>
    </section>
  )
}
