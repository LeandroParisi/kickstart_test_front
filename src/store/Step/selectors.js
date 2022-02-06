export default ($store) => {
  const getCurrentStep = () => $store.currentStep

  return { getCurrentStep }
}
