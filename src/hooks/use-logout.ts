import { useRouter } from "next/navigation";

export const useLogout =  () => { 
    const router = useRouter();

    const handleLogout = () => { 
        document.cookie = "token=; path=/; max-age=0;";
        router.push("/login");
    }

    return { handleLogout };
}