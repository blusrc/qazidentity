"use client";

import { PopoverProps } from "@radix-ui/react-popover";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Goods } from "@/data/goods";

interface GoodsSelectorProps extends PopoverProps {
  goods: Goods[];
  onSelect: Function;
}

export function reduceMoneyNumber(number: number): string {
  const suffixes: { [key: number]: string } = {
    1000000000000: "трлн",
    1000000000: "млрд",
    1000000: "млн",
    1000: "мың",
    1: "",
  };

  let res = "";

  for (const suffix in suffixes) {
    if (number >= Number(suffix)) {
      const reducedNumber: number = number / Number(suffix);
      if (Number.isInteger(reducedNumber)) {
        res = `${parseInt(reducedNumber.toString())} ${
          suffixes[Number(suffix)]
        }`;
      } else {
        res = `${reducedNumber.toFixed(1)} ${suffixes[Number(suffix)]}`;
      }
    }
  }

  return res.toString();
}

export function GoodsSelect({ goods, onSelect, ...props }: GoodsSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedGoods, setSelectedGoods] = React.useState<Goods>();

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Зат таңдаңыз"
          aria-expanded={open}
          className="flex-1 justify-between md:max-w-xl lg:max-w-xl"
        >
          {selectedGoods ? selectedGoods.name : "Зат таңдаңыз"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Іздеу..." />
          <CommandEmpty>Ондай зат табылмады :(</CommandEmpty>
          <CommandGroup heading="Заттар тізімі">
            {goods.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  setSelectedGoods(item);
                  setOpen(false);
                  onSelect(item.price);
                }}
                className="flex justify-between"
              >
                <span className="max-w-[200px]">{item.name}</span>
                <div className="flex gap-4">
                  <span>{reduceMoneyNumber(item.price)} ₸</span>
                  <Check
                    className={cn(
                      "h-4 w-4",
                      selectedGoods?.id === item.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
