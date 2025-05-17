"use client"

import { useActionState, useEffect} from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { hiringApplicationForm } from "@/actions/form-action";
import { toast } from "sonner";






const Hiring = () => {
    const [state, formAction, isPending] = useActionState(hiringApplicationForm, {
        success: false,
        message: ""
      });

      

      // Show toast when message is set
    useEffect(() => {
        if (state?.message) {
        const now = new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });

        toast(state.success ? "✅ Application Submitted" : "❌ Submission Failed", {
            description: `Submitted on ${now}`,
        });
        }
    }, [state]);



    return ( 
        <div className="bg-[#F5F5F5] w-[100vw] flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[2.5rem] text-center mt-[25px]">Looking to Join Our Team?</h2>
                    <p className="w-[60%] text-muted-foreground">We&apos;re always on the lookout for skilled, passionate individuals. Whether you&apos;re just starting out or bringing years of experience, we&apos;d love to hear what you&apos;re looking for in your next role — big or small. Tell us your strengths, your goals, and how you see yourself contributing. We&apos;re here to build great things, together.</p>
                    {/*FORM*/}
                    <form action={formAction} className="p-4 gap-4 flex flex-col w-[80%] sm:w-[50%] bg-white rounded-2xl mb-[50px] mt-[50px] items-center justify-center">

                        <div className="flex flex-col gap-1.5 w-[85%]">
                        <Label htmlFor="message" className="mt-[25px]">First Name</Label>
                        <Input 
                            className=""
                            type="text"
                            name="first_name"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 w-[85%]">
                        <Label htmlFor="message" className="">Last Name</Label>
                        <Input 
                            className=""
                            type="text"
                            name="last_name"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 w-[85%]">
                        <Label htmlFor="message">Phone Number</Label>
                        <Input 
                            className=""
                            type="text"
                            name="phone"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 w-[85%]">
                        <Label htmlFor="message">Email</Label>
                        <Input
                            className=""
                            type="email"
                            name="email" 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 w-[85%]">
                        <Label htmlFor="message">Available to start date</Label>
                        <Input
                            className=""
                            type="text"
                            name="startdate" 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 w-[85%] mb-[25px]">
                        <Label htmlFor="message">Experience</Label>
                        <Textarea 
                            placeholder="Tell us more about what you are looking for here."
                            name="experience"
                            />
                        </div>

                        <Button type="submit" className="w-[85%] mb-[25px] disabled={isPending}>">
                            {isPending ? "Submitting..." : "Submit Application"}
                        </Button>
                        
                        
                    </form>
                    
                </div>
     );
}
 
export default Hiring;