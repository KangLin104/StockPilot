'use server';

import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";

export const signUpWithEmail = async ({email, password, fullName, country, investmentGoals, riskTolerance}: SignUpFormData) =>{
    try {
        console.log("testin")
        const resonse = await auth.api.signUpEmail({
            body: { email, password, name:fullName}
        })

        if(resonse){
            await inngest.send({
                name: 'ap/user.created',
                data: {
                    email,
                    name: fullName,
                    country,
                    investmentGoals,
                    riskTolerance
                }
            })
        }

        return {success: true, data: resonse}
    } catch (e) {
        console.log("sign up fail", e)
        return {success: false, error: 'Sign up failed'}
    }
}

export const signInWithEmail = async ({email, password}: SignInFormData) =>{
    try {
        const resonse = await auth.api.signInEmail({
            body: { email, password}
        })

        return {success: true, data: resonse}
    } catch (e) {
        console.log("sign in fail", e)
        return {success: false, error: 'Sign in failed'}
    }
}

export const signOut = async () =>{
    try {
        await auth.api.signOut({ headers: await headers()})
    } catch (e) {
        console.log("sign out failed:",e)
        return { success:false, error: 'sign out failed'}
    }
}