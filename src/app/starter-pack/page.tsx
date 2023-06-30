import QuizComponent from "@/components/quiz-container";
import quizQuestions from "@/data/starter-data";

export default function StarterPackPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Біреуін таңда</h1>
      <QuizComponent options={quizQuestions} />
    </div>
  );
}
