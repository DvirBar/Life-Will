import React from 'react'
import { Text, StyleSheet, View } from '@react-pdf/renderer';




function QuestionBlock({ question, answer, newLine }) {
    const questionView = (question[question.length - 1] === '?') ? question : (question + ':')

    const styles = StyleSheet.create({
        questionBlock: {
            direction: 'rtl',
            flexDirection: newLine ? 'column' : 'row'
        },
        question: {
            fontWeight: 'bold',
            textDecoration: 'underline'
        },
    });
    return (
        <Text style={styles.questionBlock}>
            <Text>{answer}</Text>&nbsp;
            <Text style={styles.question}>{questionView}</Text>
        </Text>

    )
}

export default QuestionBlock