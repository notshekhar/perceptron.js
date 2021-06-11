## Use the library

Constructors:
```js
// Perceptron with 2 inputs
let p = new Perceptron(2);

```

Train and guess:
```js
// Train the Perceptron with a training dataset (inputs and expected outputs)
p.train(trainingDataInputs, trainingDataTargets);

// Guess for the given testing data
p.predict(testingData);
```
