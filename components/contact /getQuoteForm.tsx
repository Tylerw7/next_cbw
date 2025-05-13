"use client"

import { useActionState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import { quoteSubmitionForm } from "@/actions/form-action";
import { toast } from "sonner";

const QuoteForm = () => {
    const [state, formAction, isPending] = useActionState(quoteSubmitionForm, {
        success: false,
        message: ''
    })


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

            toast(state.success ? "✅ Form Submitted We will Contact You Soon!" : "❌ Submission Failed", {
                description: `Submitted on ${now}`,
            });
            }
        }, [state]);


    return ( 
        <>
            <div className="w-[100vw] flex flex-col md:flex-row">
                <div className="bg-[#F5F5F5] w-full md:w-[50%] flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[2.5rem] text-center mt-[25px]">Tell us what you are looking for</h2>
                    <p className="w-[60%] text-muted-foreground">Not sure where to start? Just let us know what you&apos;re thinking — big or small. We&apos;re here to help with ideas, designs, and expert craftsmanship.</p>
                    {/*FORM*/}
                    <form action={formAction} className="p-4 gap-4 flex flex-col w-[80%] bg-white rounded-2xl mb-[50px] mt-[50px] items-center justify-center">

                        <div className="flex flex-col gap-1.5 w-[85%]">
                        <Label htmlFor="message" className="mt-[25px]">Name</Label>
                        <Input 
                            className=""
                            type="text"
                            name="name"
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
                        <Label htmlFor="message">Description</Label>
                        <Textarea 
                            placeholder="Tell us more about what you are looking for here."
                            name="description"
                            />
                        </div>

                        <Button type="submit" className="w-[85%] mb-[25px] disabled={isPending}>">
                            {isPending ? "Submitting..." : "Submit Form"}
                        </Button>
                        
                    </form>
                </div>
                <div className="bg-[#333333] w-full md:w-[50%] flex flex-col gap-10 justify-center pl-12">
                    <h3 className="text-[2.5rem] tracking-wider font-semibold text-[#F5F5F5] text-center">Contact</h3>
                    <div className="flex">
                        <div className="w-[100px] h-[100px] bg-[#ffd21e] rounded-2xl flex justify-center items-center">
                        <Mail className="text-white" size={65}/>
                        </div>
                        <div className="flex flex-col p-4">
                            <Label className="text-muted-foreground text-[1.2rem]">Email</Label>
                            <p className="text-[#F5F5F5] text-[1.1rem]">springbayconstruction@yahoo.com</p>
                        </div>
                    </div>

                    <div className="flex">
                    <div className="w-[100px] h-[100px] bg-[#ffd21e] rounded-2xl flex justify-center items-center">   
                    <MapPinHouse className="text-white" size={65}/>
                    </div> 
                     <div className="flex flex-col p-4">
                        <Label className="text-muted-foreground text-[1.2rem]">Location</Label>
                        <p className="text-[#F5F5F5] text-[1.1rem]">1746 10th Way Unit B Sarasota, FL 34243</p>
                     </div>
                    </div>

                    <div className="flex mb-[50px]">
                     <div className="w-[100px] h-[100px] bg-[#ffd21e] rounded-2xl flex justify-center items-center">  
                     <Phone className="text-white" size={65}/>
                     </div> 
                     <div className="flex flex-col p-4">
                        <Label className="text-muted-foreground text-[1.2rem]">Phone</Label>
                        <p className="text-[#F5F5F5] text-[1.1rem]">941-232-2817</p>
                     </div>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default QuoteForm;