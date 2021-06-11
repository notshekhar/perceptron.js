function Perceptron(inputShape, lr) {
    this.inputShape = inputShape
    this.lr = 0.01 || lr
    this.weights = new Array(inputShape).fill(0).map(() => Math.random())
}
//Simple activation function
function SIGN(number) {
    return number < 0 ? -1 : 1
}
//Activation function
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x))
}
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

Perceptron.prototype.predict = function (inputs) {
    if (inputs.length != this.inputShape)
        throw new Error(
            `InputShape doesn't match it expected shape is ${this.inputShape}`
        )
    // sum = x0*w0 + x1*w1 + .........
    // Array.reduce(reducer, accumulatorInitialValue)
    let sum = inputs.reduce((a, b, i) => {
        return a + b * this.weights[i]
    }, 0)
    return scale(sigmoid(sum), 0, 1, -1, 1)
}
//updating weights
Perceptron.prototype.train = function (inputs, target) {
    if (inputs.length != this.inputShape)
        throw new Error(
            `InputShape doesn't match it expected shape is ${this.inputShape}`
        )
    if (typeof target != "number")
        throw new Error("Target value should be a number")
    // w = w + delta w
    // delta w = error * x * lr
    let output = this.predict(inputs)
    let error = target - output
    this.weights = this.weights.map((w, i) => w + inputs[i] * error * this.lr)
}

// let p = new Perceptron(2)
// let input = [
//     [0, 1],
//     [1, 1],
// ]
// let output = [1, -1]

// let y = p.predict([1, 0])
// console.log(p, y)

// for (let i = 0; i < 1000000; i++) {
//     for (let j = 0; j < 2; j++) {
//         p.train(input[j], output[j])
//     }
// }
// y = p.predict([0, 1])
// console.log(y)
// y = p.predict([1, 1])
// console.log(y)


