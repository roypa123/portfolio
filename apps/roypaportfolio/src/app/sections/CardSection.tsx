"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import { useRouter } from "next/navigation"

import { Send } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"


const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

type FormData = z.infer<typeof formSchema>



export default function CardSection() {

  // const router = useRouter()

   const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

    const onSubmit = async (data: FormData) => {

    console.log("Form Data:", data)
    reset()
  }

  return (
     <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white font-medium mb-2">First Name</label>
                      <Input {...register("firstName")} className="bg-gray-800/50 text-white border-gray-700 focus:border-emerald-500" />
                       {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-white font-medium mb-2">Last Name</label>
                      <Input {...register("lastName")}  className="bg-gray-800/50 text-white border-gray-700 focus:border-emerald-500" />
                      {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Email</label>
                    <Input {...register("email")}  className="bg-gray-800/50 text-white border-gray-700 focus:border-emerald-500" />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Subject</label>
                    <Input {...register("subject")} className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500" />
                     {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Message</label>
                    <Textarea
                      rows={5}
                      {...register("message")}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 resize-none"
                    />
                      {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
                  </div>
                  <Button
                       type="submit"
                       disabled={isSubmitting}
                       className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105">
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

  )
}
