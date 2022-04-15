<template>
  <h3>Pete's Wordle Picker</h3>
  <img alt="Pickr logo" src=".assets/" />
  http://pthosted.com/pickr/PetesWordlPickr.png"
  <scroll-picker
    :wheel-speed="wheelSpeed"
    style="background: white; height: 200px"
    :options="options"
    v-model="selections"
    inactive-style="color: lightgrey; font-size: 20px;"
    active-style="color: grey; font-size: 30px;"
  >
    <template v-slot:option="prop">
      <div class="custom-option">
        {{ prop.item.label }}
      </div>
    </template>
    <template v-slot:top-overlay>
      <div class="custom-top-overlay"></div>
    </template>
    <template v-slot:bottom-overlay>
      <div class="custom-bottom-overlay"></div>
    </template>
    <template v-slot:center-overlay>
      <div class="custom-center-overlay"></div>
    </template>
  </scroll-picker>
  <div style="margin-top: 30px">
    {{ selections }}
  </div>
  <div style="padding-top: 30px">
    <span style="font-size: 14px; padding-right: 10px">Wheel Speed:</span>
    <input v-model="wheelSpeed" />
  </div>
  <button style="margin-top: 30px" @click="onClickRandom">Random</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

const mockOptions = [
  [
    {
      label: '_',
      value: '_',
    },
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'D',
      value: 'D',
    },
    {
      label: 'E',
      value: 'E',
    },
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'G',
      value: 'G',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'I',
      value: 'I',
    },
    {
      label: 'J',
      value: 'J',
    },
    {
      label: 'K',
      value: 'K',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'N',
      value: 'N',
    },
    {
      label: 'O',
      value: 'O',
    },
    {
      label: 'P',
      value: 'P',
    },
    {
      label: 'Q',
      value: 'Q',
    },
    {
      label: 'R',
      value: 'R',
    },
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'T',
      value: 'T',
    },
    {
      label: 'U',
      value: 'U',
    },
    {
      label: 'V',
      value: 'V',
    },
    {
      label: 'W',
      value: 'W',
    },
    {
      label: 'X',
      value: 'X',
    },
    {
      label: 'Y',
      value: 'Y',
    },
    {
      label: 'Z',
      value: 'Z',
    },
  ],
  [
    {
      label: '_',
      value: '_',
    },
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'D',
      value: 'D',
    },
    {
      label: 'E',
      value: 'E',
    },
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'G',
      value: 'G',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'I',
      value: 'I',
    },
    {
      label: 'J',
      value: 'J',
    },
    {
      label: 'K',
      value: 'K',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'N',
      value: 'N',
    },
    {
      label: 'O',
      value: 'O',
    },
    {
      label: 'P',
      value: 'P',
    },
    {
      label: 'Q',
      value: 'Q',
    },
    {
      label: 'R',
      value: 'R',
    },
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'T',
      value: 'T',
    },
    {
      label: 'U',
      value: 'U',
    },
    {
      label: 'V',
      value: 'V',
    },
    {
      label: 'W',
      value: 'W',
    },
    {
      label: 'X',
      value: 'X',
    },
    {
      label: 'Y',
      value: 'Y',
    },
    {
      label: 'Z',
      value: 'Z',
    },
  ],
  [
    {
      label: '_',
      value: '_',
    },
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'D',
      value: 'D',
    },
    {
      label: 'E',
      value: 'E',
    },
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'G',
      value: 'G',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'I',
      value: 'I',
    },
    {
      label: 'J',
      value: 'J',
    },
    {
      label: 'K',
      value: 'K',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'N',
      value: 'N',
    },
    {
      label: 'O',
      value: 'O',
    },
    {
      label: 'P',
      value: 'P',
    },
    {
      label: 'Q',
      value: 'Q',
    },
    {
      label: 'R',
      value: 'R',
    },
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'T',
      value: 'T',
    },
    {
      label: 'U',
      value: 'U',
    },
    {
      label: 'V',
      value: 'V',
    },
    {
      label: 'W',
      value: 'W',
    },
    {
      label: 'X',
      value: 'X',
    },
    {
      label: 'Y',
      value: 'Y',
    },
    {
      label: 'Z',
      value: 'Z',
    },
  ],
  [
    {
      label: '_',
      value: '_',
    },
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'D',
      value: 'D',
    },
    {
      label: 'E',
      value: 'E',
    },
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'G',
      value: 'G',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'I',
      value: 'I',
    },
    {
      label: 'J',
      value: 'J',
    },
    {
      label: 'K',
      value: 'K',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'N',
      value: 'N',
    },
    {
      label: 'O',
      value: 'O',
    },
    {
      label: 'P',
      value: 'P',
    },
    {
      label: 'Q',
      value: 'Q',
    },
    {
      label: 'R',
      value: 'R',
    },
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'T',
      value: 'T',
    },
    {
      label: 'U',
      value: 'U',
    },
    {
      label: 'V',
      value: 'V',
    },
    {
      label: 'W',
      value: 'W',
    },
    {
      label: 'X',
      value: 'X',
    },
    {
      label: 'Y',
      value: 'Y',
    },
    {
      label: 'Z',
      value: 'Z',
    },
  ],
  [
    {
      label: '_',
      value: '_',
    },
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'D',
      value: 'D',
    },
    {
      label: 'E',
      value: 'E',
    },
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'G',
      value: 'G',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'I',
      value: 'I',
    },
    {
      label: 'J',
      value: 'J',
    },
    {
      label: 'K',
      value: 'K',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'N',
      value: 'N',
    },
    {
      label: 'O',
      value: 'O',
    },
    {
      label: 'P',
      value: 'P',
    },
    {
      label: 'Q',
      value: 'Q',
    },
    {
      label: 'R',
      value: 'R',
    },
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'T',
      value: 'T',
    },
    {
      label: 'U',
      value: 'U',
    },
    {
      label: 'V',
      value: 'V',
    },
    {
      label: 'W',
      value: 'W',
    },
    {
      label: 'X',
      value: 'X',
    },
    {
      label: 'Y',
      value: 'Y',
    },
    {
      label: 'Z',
      value: 'Z',
    },
  ],
];

export default defineComponent({
  name: 'Advance',
  setup() {
    const state = reactive({
      options: mockOptions,
      selections: ['a2', 'b2', 'c1', 'd1'],
      wheelSpeed: 1,
    });
    function random(number: number) {
      return Math.floor(Math.random() * number);
    }
    function getValue(option: any) {
      return typeof option === 'string' ? option : option.value;
    }
    function onClickRandom() {
      state.selections = state.options.map((option) => {
        return getValue(option[random(option.length)]);
      });
    }
    return {
      ...toRefs(state),
      onClickRandom,
    };
  },
});
</script>

<style scoped>
.custom-center-overlay {
  height: 100%;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: lightgrey;
}
.custom-top-overlay {
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.1)
  );
}
.custom-bottom-overlay {
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.1)
  );
}
.custom-option {
  padding: 10px 20px;
  height: 80px;
  width: 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>
