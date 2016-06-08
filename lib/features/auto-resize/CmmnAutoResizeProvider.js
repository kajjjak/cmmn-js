'use strict';

var is = require('../../util/ModelUtil').is,
    getDefinition = require('../../util/ModelUtil').getDefinition;

var inherits = require('inherits');

var AutoResizeProvider = require('diagram-js/lib/features/auto-resize/AutoResizeProvider');

/**
 * This module provides a CMMN specific check if an element
 * can be resized.
 */
function CmmnAutoResizeProvider(eventBus) {
  AutoResizeProvider.call(this, eventBus);
}

inherits(CmmnAutoResizeProvider, AutoResizeProvider);

module.exports = CmmnAutoResizeProvider;

/**
 * Check if the given shape can be expanded
 *
 * @param  {Array<djs.model.Shape>} elements
 * @param  {djs.model.Shape} target
 *
 * @return {boolean}
 */
CmmnAutoResizeProvider.prototype.canResize = function(elements, target) {

  if (!is(target, 'cmmn:CMMNElement')) {
    return;
  }

  var definition = getDefinition(target);

  return is(definition, 'cmmn:PlanFragment');
};