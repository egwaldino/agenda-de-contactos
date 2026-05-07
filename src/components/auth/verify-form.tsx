"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";
import { useVerify } from "@/hooks/use-verify";

type VerifyFormProps = {
  phone: string;
  onSuccess: () => void;
};

export const VerifyForm = ({ phone, onSuccess }: VerifyFormProps) => {
  const { code, setCode, handleVerifyCode } = useVerify({ phone, onSuccess });

  return (
    <div className="w-96 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-zinc-200 text-xl font-semibold">Verificar código</p>
        <p className="text-zinc-400 text-sm">
          Introduz o código de 4 dígitos enviado para {phone}.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <Label htmlFor="code">Código de verificação</Label>
          <Input
            id="code"
            name="code"
            placeholder="1234"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Field>
      </FieldGroup>

      <Button
        className="w-full cursor-pointer bg-zinc-800 text-white hover:bg-zinc-700"
        onClick={handleVerifyCode}
      >
        Verificar
      </Button>
    </div>
  );
};
