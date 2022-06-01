import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";
describe('TestCalc', () => {

    it('test operand1', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('test operand2', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        expect(wrapper.vm.operand2).toBe(2)
    })
    // сложение
    it('test sum', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        const operand2 = wrapper.find('input[name=operand2]')
        operand1.setValue('1')
        operand2.setValue('2')

        const btn = wrapper.find('button[name="+"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })
    // вычитание
    it('test sub', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        const operand2 = wrapper.find('input[name=operand2]')
        operand1.setValue('2')
        operand2.setValue('1')
        const btn = wrapper.find('button[name="-"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })
    // деление
    it('test div', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        const operand2 = wrapper.find('input[name=operand2]')
        operand1.setValue('2')
        operand2.setValue('1')
        const btn = wrapper.find('button[name="/"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })
    // умножение
    it('test mul', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        const operand2 = wrapper.find('input[name=operand2]')
        operand1.setValue('2')
        operand2.setValue('1')
        const btn = wrapper.find('button[name="*"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })
    // экранная клавиатура
    it('test keyboard', async () => {
        const wrapper = mount(Calc)
        const keyboard = wrapper.find('input[name=keyboard]')
        const radioOperand1 = wrapper.find('#op1')
        const radioOperand2 = wrapper.find('#op2')
        const erase = wrapper.find('button[name=erase]')
        const num1 = wrapper.find('button[name=key1]')
        const num2 = wrapper.find('button[name=key2]')
        //открываем клавиатуру
        keyboard.setChecked()
        expect(wrapper.vm.showvk).toBe(true)
        // Выбираем операнд1
        await radioOperand1.setChecked()
        expect(operand1.element.checked).toBeTruthy()
        // Проверяем работу клавиш
        await num1.trigger('click')
        await num2.trigger('click')
        expect(wrapper.vm.operand1).toBe(12)
        //удаляем введенное значение
        await erase.trigger('click')
        expect(wrapper.vm.operand1).toBe(1)
        // Выбираем операнд2
        await radioOperand2.setChecked()
        expect(operand2.element.checked).toBeTruthy()
        // вводим значение в операнд2
        num1.trigger('click')
        num2.trigger('click')
        expect(wrapper.vm.operand2).toBe(12)
    })
})