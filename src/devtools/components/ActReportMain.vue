<template>
  <v-container
    v-if="report === null"
    fluid
  >
    <v-row >
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn @click="evaluatePage">
          Evaluate
          <font-awesome-icon
            class="ml-4"
            :icon="['fas', 'arrow-progress']"
          ></font-awesome-icon>
        </v-btn>
      </v-col>

      <v-spacer></v-spacer>
    </v-row>
  </v-container>
  <v-container
    v-else
    fluid
  >
    <v-row>
      <v-col>Report is done! FAAAILED: {{ report.metadata.failed  }}</v-col>
      <v-col>
        <v-btn @click="evaluatePage">
          Re-evaluate
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ActReportDisplay :report="report"></ActReportDisplay>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ActReportDisplay from './components/ActReportDisplay.vue';
import type { ACTRulesReport } from '@qualweb/act-rules';
import locale_en from './locales/en.mts';

console.debug('Devtools MAIN is loaded!');

const report = ref<ACTRulesReport | null>(null);

const ACTRules = (await import('@qualweb/act-rules')).ACTRules;

window.qwPage = new (await import('@qualweb/qw-page')).QWPage(document, true);
const qwUtil = await import('@qualweb/util');
window.DomUtils = qwUtil.DomUtils;
window.AccessibilityUtils = qwUtil.AccessibilityUtils;
window.disabledWidgets = window.AccessibilityUtils.getDisabledWidgets();
window.act = new ACTRules({ translate: locale_en, fallback: locale_en });

async function evaluatePage() {
  report.value = null;


  window.act.executeAtomicRules();
  window.act.executeCompositeRules();

  report.value = window.act.getReport();
}
</script>