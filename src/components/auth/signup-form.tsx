"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";
import { VerifyForm } from "@/components/auth/verify-form";
import { useLogin } from "@/hooks/use-login";
import Image from "next/image";
import BgImage from "@/assets/BgImage.png";
import Logo2 from "@/assets/Logo2.png";
import Logo1 from "@/assets/Logo1.png";
import Contact1 from "@/assets/Contact1.png";
import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";
import Link from "next/link";

type SignupFormProps = {
  onSuccess: () => void;
};

export const SignupForm = ({ onSuccess }: SignupFormProps) => {
  const { phone, setPhone, codeSent, handleSendCode, handleInConstruction } =
    useLogin();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  if (codeSent) {
    return <VerifyForm phone={phone} onSuccess={onSuccess} />;
  }

  return (
    <div className="w-200 h-150 border-zinc-600 flex -">
      <div className="bg-white w-100 p-8 flex flex-col gap-6">
        <div className="flex w-full items-start gap-2 mb-4">
          <Image src={Logo1} alt="Logo Syncly" width={80} height={60} />
        </div>

        <FieldGroup>
          <div className="">
            <p className="text-black text-xl font-semibold">
              Cria a tua conta na Syncly
            </p>
            <p className="text-zinc-400 text-sm text-start">
              Introduz os teus dados e o número de telefone para receber um
              código de verificação e criar a tua conta.
            </p>
          </div>
          <div className="flex gap-2">
            <Field>
              <Label
                htmlFor="firstName"
                className="text-black text-sm font-normal"
              >
                Nome
              </Label>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="João"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border h-10 border-[#1C4532] text-black text-sm placeholder:text-zinc-400 placeholder:text-sm rounded-md"
              />
            </Field>
            <Field>
              <Label
                htmlFor="lastName"
                className="text-black text-sm font-normal"
              >
                Apelido
              </Label>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Silva"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border h-10 border-[#1C4532] text-black text-sm placeholder:text-zinc-400 placeholder:text-sm rounded-md"
              />
            </Field>
          </div>
          <div className="flex gap-2">
            <Field>
              <Label htmlFor="email" className="text-black text-sm font-normal">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border h-10 border-[#1C4532] text-black text-sm placeholder:text-zinc-400 placeholder:text-sm rounded-md"
              />
            </Field>
            <Field>
              <Label htmlFor="phone" className="text-black text-sm font-normal">
                Número de telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+244923456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border h-10 border-[#1C4532] text-black text-sm placeholder:text-zinc-400 placeholder:text-sm rounded-md"
              />
            </Field>
          </div>

          <Button
            className="w-full h-10 cursor-pointer bg-[#1C4532] text-white hover:bg-[#1C4532]/90 text-sm"
            onClick={handleSendCode}
          >
            Continuar
          </Button>
          <p className="text-start text-sm font-light leading-none">
            Já tens uma conta?{" "}
            <Link
              href="/login"
              className="text-[#1C4532] underline font-medium"
            >
              Entrar
            </Link>
          </p>

        </FieldGroup>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">ou criar conta com</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={handleInConstruction}
            className="flex cursor-pointer items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-700 bg-white text-[#1C4532] hover:text-white hover:bg-[#1c4532] transition"
          >
            <Image src={GoogleIcon} alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium">Google</span>
          </button>

          <button
            onClick={handleInConstruction}
            className="flex cursor-pointer items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-700 bg-white text-[#1C4532] hover:text-white hover:bg-[#1c4532] transition"
          >
            <Image src={AppleIcon} alt="Apple" className="w-5 h-5" />
            <span className="text-sm font-medium">Apple</span>
          </button>
        </div>
      </div>

      <div className="w-100 bg-black relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={BgImage}
            alt="Minha imagem"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute bottom-5 left-40 ">
          <Image src={Logo2} alt="Logo Syncly" width={80} height={60} />
        </div>
        <div className="absolute bottom-48 left-10 ">
          <Image src={Contact1} alt="Contact Syncly" width={300} height={300} />
        </div>
        <p className="text-center absolute leading-[0.8] bottom-30 left-10 text-4xl w-80 text-zinc-200 font-semibold">
          Os teus contactos, sempre contigo
        </p>
        <p className="absolute bottom-20 left-22 text-sm w-60 leading-none text-zinc-200/70 font-normal">
          Organiza, partilha e aceda à tua rede de contactos em qualquer
          dispositivo.
        </p>
      </div>
    </div>
  );
};
