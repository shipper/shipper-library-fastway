(function() {
  var Action, Controller;

  Controller = require('./types/controller')["new"](2, 'PSC');

  Action = require('./types/action');

  new Action(Controller, 'pickupRF', {
    Postcode: {
      type: 'int',
      required: true
    },
    Suburb: {
      type: 'string'
    },
    CountryCode: {
      type: 'int',
      required: true
    }
  });

  new Action(Controller, 'listDeliverySuburbs', {
    RFCode: {
      type: 'string',
      required: true
    },
    term: {
      type: 'string'
    }
  });

  new Action(Controller, 'listRFs', {
    CountryCode: {
      type: 'int',
      required: true
    },
    FranchiseeCode: {
      type: 'string'
    }
  });

  new Action(Controller, 'lookup', {
    RFCode: {
      type: 'string',
      required: true
    },
    Suburb: {
      type: 'string',
      required: true
    },
    DestPostcode: {
      type: 'int',
      required: true
    },
    WeightInKg: {
      type: 'number',
      required: true
    },
    LengthInCm: {
      type: 'number'
    },
    WidthInCm: {
      type: 'number'
    },
    HeightInCm: {
      type: 'number'
    },
    AllowMultipleRegions: {
      type: 'boolean'
    },
    ShowBoxProduct: {
      type: 'boolean'
    }
  });

  new Action(Controller, 'render', {
    RFCode: {
      type: 'string',
      required: true
    },
    Suburb: {
      type: 'string',
      required: true
    },
    DestPostcode: {
      type: 'int',
      required: true
    },
    WeightInKg: {
      type: 'number',
      required: true
    },
    LengthInCm: {
      type: 'number'
    },
    WidthInCm: {
      type: 'number'
    },
    HeightInCm: {
      type: 'number'
    },
    AllowMultipleRegions: {
      type: 'boolean'
    },
    ShowBoxProduct: {
      type: 'boolean'
    },
    Template: {
      type: 'string',
      "enum": ['cfintranet', 'cfintranet_ie', 'cfintranet_nz', 'multiple_regions']
    }
  });

  module.exports = Controller;

}).call(this);
