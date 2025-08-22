import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useMemo,
  useState
} from "react";
import { api } from "backend/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { Conversation } from "@/components/conversation";
import { PromptInput } from "@/components/prompt-input";

function App() {
  const messages = useQuery(api.message.list);
  const send = useMutation(api.message.send);
  const [prompt, setPrompt] = useState("");

  const promptChangeHandler = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setPrompt(e.currentTarget.value);
    },
    [setPrompt]
  );

  const sendHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (prompt.trim() === "") return;
      const userPrompt = prompt;
      setPrompt("");
      await send({ prompt: userPrompt });
    },
    [prompt, send, setPrompt]
  );

  const isDisabled = useMemo(() => {
    if (messages === undefined) return true;
    if (messages.length === 0) return false;
    const lastMessageStatus = messages[messages.length - 1]?.parts?.[0]?.state;
    if (lastMessageStatus === "done") {
      return false;
    }
    return true;
  }, [messages]);

  return (
    <div className="flex h-screen w-screen flex-col gap-y-3">
      <Conversation className="flex-1" messages={messages} />
      <PromptInput
        className="mb-3"
        sendHandler={sendHandler}
        prompt={prompt}
        promptChangeHandler={promptChangeHandler}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default App;
