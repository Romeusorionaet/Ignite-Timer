import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-suggestions"
          placeholder="Nomear tarefa"
          disabled={!!activeCycle}
          {...register('task')}
        />

        <datalist id="task-suggestions">
          <option value="p1" />
          <option value="p2" />
          <option value="p3" />
        </datalist>
      </div>

      <div>
        <label htmlFor="minutsAmount">duration</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          disabled={!!activeCycle}
          placeholder="00"
          step={5}
          min={5}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
