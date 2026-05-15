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
    <div className="w-96 rounded-xl p-7 border border-zinc-600 flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1">
        <p className="text-zinc-200 text-lg font-semibold">Verificar código</p>
        <p className="text-zinc-400 text-sm text-center">
          Introduz o código de 4 dígitos enviado para {phone}
        </p>
      </div>

      <FieldGroup>
        <Field>
          <Label htmlFor="code" className="text-zinc-200 text-xs font-normal">
            Código de verificação
          </Label>
          <Input
            id="code"
            name="code"
            type="code"
            placeholder="1234"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border border-zinc-500 text-zinc-200 text-xs placeholder:text-zinc-400 placeholder:text-xs rounded-md"
          />
        </Field>
      </FieldGroup>

      <Button
        className="w-full cursor-pointer bg-zinc-800 text-white hover:bg-zinc-700 text-xs"
        onClick={handleVerifyCode}
      >
        Verificar
      </Button>
    </div>
  );
};
