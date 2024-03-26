import { z } from "zod";

export const SignupValidation = z.object({
    name:z.string().min(3,{message:"Too short"}),
    Username:z.string().min(3,{message:"Too short"}),
    email:z.string().email(),
    Password:z.string().min(8,{message:"Password must be atleast 8 charachters long"}),

});
