"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";
import { VerifyForm } from "@/components/auth/verify-form";
import { useLogin } from "@/hooks/use-login";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { phone, setPhone, codeSent, handleSendCode } = useLogin();

  if (codeSent) {
    return <VerifyForm phone={phone} onSuccess={onSuccess} />;
  }

  return (
    <div className="w-96 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-zinc-200 text-xl font-semibold">Entrar</p>
        <p className="text-zinc-400 text-sm">
          Introduz o teu número de telefone para receber um código de
          verificação.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <Label htmlFor="phone">Número de telefone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+244923456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
      </FieldGroup>

      <Button
        className="w-full cursor-pointer bg-zinc-800 text-white hover:bg-zinc-700"
        onClick={handleSendCode}
      >
        Enviar código
      </Button>
    </div>
  );
};
