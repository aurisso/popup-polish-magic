
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LanguageModel {
  name: string;
  isNew?: boolean;
}

const languageModels: LanguageModel[] = [
  { name: "GPT-4o" },
  { name: "DeepSeek" },
  { name: "Grok", isNew: true },
  { name: "GPT-4" },
  { name: "OpenAI o1" },
  { name: "Claude" },
];

const imageModels = ["DALL-E 3", "Flux"];

const PricingCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-gray-50 to-gray-100 p-4">
      <Card className="w-full max-w-md overflow-hidden bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent">
            Upgrade to ChatBot Pro
          </h2>
          <p className="mt-2 text-gray-600">
            Unlock the full potential of Chatbot Pro
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="text-sm font-medium text-gray-500">14-Day Trial</div>
          <div className="mt-2 flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-900">$2.85</span>
          </div>
          <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-6 text-lg font-semibold transition-transform hover:scale-[1.02]">
            Choose This Plan
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-semibold text-gray-900">Language Models</h3>
          <div className="space-y-3">
            {languageModels.map((model) => (
              <div key={model.name} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-blue-600" />
                <span className="text-gray-600">{model.name}</span>
                {model.isNew && (
                  <Badge className="ml-2 bg-blue-100 text-blue-700" variant="secondary">
                    New
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-semibold text-gray-900">Image Generation</h3>
          <div className="space-y-3">
            {imageModels.map((model) => (
              <div key={model} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-blue-600" />
                <span className="text-gray-600">{model}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-semibold text-gray-900">Features</h3>
          <div className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-blue-600" />
            <span className="text-gray-600">Context Memory</span>
            <span className="ml-2 text-sm text-gray-500">(Full)</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingCard;
