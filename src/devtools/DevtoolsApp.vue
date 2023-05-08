<template>
  <v-app id="inspire">
    <v-navigation-drawer
      model-value
      class="pt-4"
      color="grey-lighten-3"
      rail
    >
      <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </v-navigation-drawer>

    <v-main>
      <v-container
      v-if="report === null"
        fluid
      >
        <v-row >
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn @click="evaluatePage">
              Evaluate
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
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ActReportDisplay from './components/ActReportDisplay.vue';

console.debug('Devtools MAIN is loaded!');

import { ACTRules, ACTRulesReport } from '@qualweb/act-rules';
import { QWPage } from '@qualweb/qw-page';
import { DomUtils, AccessibilityUtils } from '@qualweb/util';
import locale_en from './locales/en.mts';

const report = ref<ACTRulesReport | null>(null);

function evaluatePage() {
  report.value = null;

  window.qwPage = new QWPage(document, true);
  window.DomUtils = DomUtils;
  window.AccessibilityUtils = AccessibilityUtils;
  window.disabledWidgets = AccessibilityUtils.getDisabledWidgets();

  window.act = new ACTRules({ translate: locale_en, fallback: locale_en });

  window.act.executeAtomicRules();
  window.act.executeCompositeRules();

  report.value = window.act.getReport();
}
</script>