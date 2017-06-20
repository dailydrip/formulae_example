import FormType from "../types/FormType";
import QuestionDependencyType from "../types/QuestionDependencyType";
import QuestionType from "../types/QuestionType";
import SectionType from "../types/SectionType";
import { List } from "immutable";

export function decodeForm(data: ApiForm): FormType {
  // Decode the questions on their own
  const questions = List(data.questions.map(decodeQuestion));
  debugger;
  return new FormType({
    id: data.id,
    completionContent: data.completion_content,
    sections: List(
      data.sections.map(section => {
        return decodeSection(section, questions);
      })
    )
  });
}

function decodeSection(
  section: ApiSection,
  questions: List<QuestionType>
): SectionType {
  return new SectionType({
    name: section.name,
    content: section.content,
    order: section.order,
    questions: List(
      questions.filter(question => {
        return question.get("section_id") === section.id;
      })
    )
  });
}

function decodeQuestion(question: ApiQuestion): QuestionType {
  const questionDependency = decodeQuestionDependency(
    question.question_dependency
  );
  return new QuestionType({
    id: `${question.id}`,
    key: question.key,
    label: question.label,
    content: question.content,
    type: question.question_type,
    validateAs: question.validate_as,
    order: question.order,
    required: question.required,
    placeholder: question.placeholder,
    section_id: question.section_id,
    //choices: decodeChoices(question.choices),
    questionDependency: questionDependency
  });
}

function decodeQuestionDependency(
  questionDependency: ApiQuestionDependency
): ?QuestionDependencyType {
  if (questionDependency === null) {
    return null;
  }
  return new QuestionDependencyType(
    {
      //display: questionDependency.display,
      //choices: decodeChoices(questionDependency.choices),
      //and: questionDependency.and
    }
  );
}

function decodeChoices(choices: Array<ApiChoice>): List<ChoiceType> {
  return List(
    choices.map(choice => {
      return new ChoiceType({
        id: choice.id,
        question_id: choice.question_id,
        question_dependency_id: choice.question_dependency_id,
        metadata: choice.metadata,
        maximum_chosen: choice.maximum_chosen,
        label: choice.label
      });
    })
  );
}

export default {
  decodeForm
};
