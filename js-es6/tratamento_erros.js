class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const myError = new CustomError({
        message: 'Custom error message.',
        data: {
            type: 'Server Error'
        }
    });
    // console.log(name);
    const name = 'Charles Miranda';
    throw myError;
} catch(err) {
    if (err.data.type === 'Server Error'){
        console.log(err.data);
    } else {
        console.log(err);
        console.log(err.data);
    }
} finally {
    console.log('Keep going...');
}
