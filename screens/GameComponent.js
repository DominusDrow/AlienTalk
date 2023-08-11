import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card } from '@rneui/themed'

const wordsData = [
  { id: 1, spanish: 'Perro', english: 'Dog' },
  { id: 2, spanish: 'Gato', english: 'Cat' },
  { id: 3, spanish: 'Casa', english: 'House' }
  // Agrega más palabras aquí
]

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const GameComponent = () => {
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(3)
  const [words, setWords] = useState(shuffleArray(wordsData))

  const handleMatch = (wordId) => {
    const updatedWords = words.map((word) =>
      word.id === wordId ? { ...word, matched: true } : word
    )
    setWords(updatedWords)
    setScore(score + 1)
  }

  const handleIncorrect = () => {
    setAttempts(attempts - 1)
    if (attempts - 1 === 0) {
      // Game over logic here
    }
  }

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Puntaje: {score}</Text>
          <Text style={styles.attemptsText}>Intentos restantes: {attempts}</Text>
        </View>
        <View style={styles.gameContainer}>
          <View style={styles.column}>
            {words.map((word) => (
              <Button
                key={word.id}
                title={word.english}
                disabled={word.matched}
                buttonStyle={styles.button}
                onPress={() => handleMatch(word.id)}
              />
            ))}
          </View>
          <View style={styles.column}>
            {shuffleArray(words).map((word) => (
              <Button
                key={word.id}
                title={word.spanish}
                disabled={word.matched}
                buttonStyle={styles.button}
                onPress={handleIncorrect}
              />
            ))}
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212' // Fondo oscuro
  },
  cardContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1E1E1E', // Color de tarjeta en tema oscuro
    elevation: 5
  },
  scoreContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white' // Texto blanco
  },
  attemptsText: {
    fontSize: 16,
    color: 'white' // Texto blanco
  },
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  column: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    marginVertical: 5,
    width: 150,
    backgroundColor: '#4CAF50' // Color de botón
  }
})

export default GameComponent
