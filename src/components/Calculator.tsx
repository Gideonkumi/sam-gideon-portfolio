import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Delete } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const { toast } = useToast();

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = parseFloat(previousValue);
      const newValue = calculate(currentValue, inputValue, operation);

      if (newValue === null) return;

      setDisplay(String(newValue));
      setPreviousValue(String(newValue));
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number | null => {
    try {
      switch (operation) {
        case "+":
          return firstValue + secondValue;
        case "-":
          return firstValue - secondValue;
        case "×":
          return firstValue * secondValue;
        case "÷":
          if (secondValue === 0) {
            toast({
              title: "Error",
              description: "Division by zero is not allowed",
              variant: "destructive",
            });
            return null;
          }
          return firstValue / secondValue;
        case "=":
          return secondValue;
        default:
          return secondValue;
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid calculation",
        variant: "destructive",
      });
      return null;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      performOperation("=");
      setOperation(null);
      setPreviousValue(null);
      setWaitingForNewValue(true);
    }
  };

  const buttonClass = "h-16 text-lg font-semibold transition-all duration-200 hover:scale-105";
  const numberButtonClass = `${buttonClass} bg-muted hover:bg-muted/80`;
  const operatorButtonClass = `${buttonClass} bg-primary hover:bg-primary/90 text-primary-foreground`;
  const specialButtonClass = `${buttonClass} bg-accent hover:bg-accent/90 text-accent-foreground`;

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="overflow-hidden shadow-2xl">
        <CardContent className="p-6 space-y-4">
          {/* Display */}
          <div className="bg-muted/30 rounded-lg p-6 text-right">
            <div className="text-3xl font-mono font-bold text-foreground min-h-[2.5rem] flex items-center justify-end overflow-hidden">
              {display.length > 12 ? display.slice(0, 12) + "..." : display}
            </div>
            {operation && previousValue && (
              <div className="text-sm text-muted-foreground mt-2">
                {previousValue} {operation}
              </div>
            )}
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <Button
              className={specialButtonClass}
              onClick={clear}
              variant="outline"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
            <Button
              className={specialButtonClass}
              onClick={backspace}
              variant="outline"
            >
              <Delete className="w-5 h-5" />
            </Button>
            <Button
              className={operatorButtonClass}
              onClick={() => performOperation("÷")}
            >
              ÷
            </Button>
            <Button
              className={operatorButtonClass}
              onClick={() => performOperation("×")}
            >
              ×
            </Button>

            {/* Row 2 */}
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("7")}
              variant="outline"
            >
              7
            </Button>
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("8")}
              variant="outline"
            >
              8
            </Button>
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("9")}
              variant="outline"
            >
              9
            </Button>
            <Button
              className={operatorButtonClass}
              onClick={() => performOperation("-")}
            >
              -
            </Button>

            {/* Row 3 */}
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("4")}
              variant="outline"
            >
              4
            </Button>
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("5")}
              variant="outline"
            >
              5
            </Button>
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("6")}
              variant="outline"
            >
              6
            </Button>
            <Button
              className={operatorButtonClass}
              onClick={() => performOperation("+")}
            >
              +
            </Button>

            {/* Row 4 */}
            <Button
              className={`${numberButtonClass} col-span-2`}
              onClick={() => inputNumber("0")}
              variant="outline"
            >
              0
            </Button>
            <Button
              className={numberButtonClass}
              onClick={inputDecimal}
              variant="outline"
            >
              .
            </Button>
            <Button
              className={`${operatorButtonClass} bg-gradient-primary hover:bg-gradient-primary/90`}
              onClick={handleEquals}
            >
              =
            </Button>

            {/* Row 5 */}
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("1")}
              variant="outline"
            >
              1
            </Button>
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("2")}
              variant="outline"
            >
              2
            </Button>
            <Button
              className={numberButtonClass}
              onClick={() => inputNumber("3")}
              variant="outline"
            >
              3
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;