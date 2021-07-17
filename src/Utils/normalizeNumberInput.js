const normalizeNumberInput = (value) => {
    return value.replace(/[^\d]/g, '');
}

export default normalizeNumberInput;