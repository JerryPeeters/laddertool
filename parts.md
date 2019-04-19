entry questions for state:
planNaam
woningAantal
plaatsNaam
vigerendPlan


question.inputTypes {
    textInput: 1 option, appendTextInput, textHandler, 1 nextKey

}
question.options [array of objects {text, targetKey}]
question.additionalInfo [array of objects {text, targetKey}]







Question key = paragraafString
    questionTitle
    vorigeKeuzeToelichting
    questionToelichting, onClick () => InformationBox

    prevButton, nextButton

InformationBox key = paragraafString
    popupbox
    closeButton

LivePreview

state.doc = array of strings representing paragraphs
