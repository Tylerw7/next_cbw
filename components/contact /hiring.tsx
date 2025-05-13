"use client"

import { useActionState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { hiringApplicationForm } from "@/actions/form-action";




const Hiring = () => {
    const [state, formAction, isPending] = useActionState(hiringApplicationForm, {
        success: false,
        message: ""
      });

    return ( 
        <div className="bg-[#F5F5F5] w-[100vw] flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[2.5rem] text-center mt-[25px]">Tell us what you are looking for</h2>
                    <p className="w-[60%] text-muted-foreground">Not sure where to start? Just let us know what you&apos;re thinking — big or small. We&apos;re here to help with ideas, designs, and expert craftsmanship.</p>
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
                        
                        {state.message && (
                            <p
                                className={`text-sm mt-2 px-4 py-2 rounded-md ${
                                state.success
                                    ? 'bg-green-100 text-green-800 border border-green-300'
                                    : 'bg-red-100 text-red-800 border border-red-300'
                                }`}
                            >
                                {state.message}
                            </p>
                        )}
                    </form>
                </div>
     );
}
 
export default Hiring;