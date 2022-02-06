const setState = (setter) => (field, value) => {
  setter((prev) => ({
    ...prev,
    [field]: value,
  }))
}

export {
  setState,
}
