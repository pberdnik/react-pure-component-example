
const counter = {}

const countComponentByName = (name) => {
  let entity = counter[name]

  if (!entity) {
    entity = counter[name] = {
      $target: document.getElementById(name),
      count: 0,
    }
  }

  entity.count += 1
  entity.$target.innerHTML = entity.count
}

export const appendToProduce = (...args) => {
}

export const countComponent = (name, isPure) => {
  let finalName = `${isPure ? 'pure' : 'normal'}${name}`
  countComponentByName(finalName)

  finalName = `${isPure ? 'pure' : 'normal'}Total`
  countComponentByName(finalName)
}

export const wrapCountComponent = (name, isPure) => (componentGenerator) => (props) => {
  countComponent(name, isPure)
  return componentGenerator(props)
}
