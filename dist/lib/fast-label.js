(function() {
  var Action, Controller;

  Controller = require('./types/controller')["new"](2, 'FastLabel');

  Action = require('./types/action');

  new Action(Controller, 'addConsignment', {
    ManifestID: {
      type: 'int'
    },
    CostCenterID: {
      type: 'int'
    },
    UserID: {
      type: 'int'
    },
    AccountNo: {
      type: 'string'
    },
    ContactName: {
      type: 'string'
    },
    CompanyName: {
      type: 'string+',
      required: true
    },
    Address1: {
      type: 'string+',
      required: true
    },
    Address2: {
      type: 'string'
    },
    Suburb: {
      type: 'string+',
      required: true
    },
    Postcode: {
      type: 'int',
      required: true
    },
    ContactEmail: {
      type: 'string'
    },
    ContactPhone: {
      type: 'string'
    },
    ContactMobile: {
      type: 'string'
    },
    SpecialInstruction1: {
      type: 'string'
    },
    SpecialInstruction2: {
      type: 'string'
    },
    SpecialInstruction3: {
      type: 'string'
    },
    ApplyRurals: {
      type: 'boolean'
    },
    ApplySaturdayDelivery: {
      type: 'boolean'
    },
    Items: {
      type: 'array',
      items: {
        type: 'object',
        schema: {
          Reference: {
            type: 'string'
          },
          Quantity: {
            type: 'int',
            getDefault: function() {
              return 1;
            }
          },
          Weight: {
            type: 'number'
          },
          Length: {
            type: 'number'
          },
          Width: {
            type: 'number'
          },
          Height: {
            type: 'number'
          },
          Packaging: {
            type: 'int'
          }
        }
      }
    }
  });

  new Action(Controller, 'addManifest', {
    UserID: {
      type: 'int',
      required: true
    },
    Description: {
      type: 'string'
    },
    MultiBusinessID: {
      type: 'int'
    },
    AutoImport: {
      type: 'boolean'
    }
  });

  new Action(Controller, 'addContact', {
    UserID: {
      type: 'int',
      required: true
    },
    AccountNo: {
      type: 'string'
    },
    Company: {
      type: 'string'
    },
    FirstName: {
      type: 'string+',
      required: true
    },
    LastName: {
      type: 'string+',
      required: true
    },
    StreetAddress: {
      type: 'string+',
      required: true
    },
    Suburb: {
      type: 'string+',
      required: true
    },
    Postcode: {
      type: 'int',
      required: true
    },
    City: {
      type: 'string'
    },
    Phone: {
      type: 'string'
    },
    EmailAddress: {
      type: 'string'
    }
  });

  new Action(Controller, 'closeManifest', {
    ManifestID: {
      type: 'int',
      required: true
    },
    UserID: {
      type: 'int',
      required: true
    }
  });

  new Action(Controller, 'generateFastwayLabel', {
    UserID: {
      type: 'int',
      required: true
    },
    ManifestID: {
      type: 'int'
    },
    ConsignmentID: {
      type: 'int'
    },
    ItemID: {
      type: 'int'
    }
  });

  new Action(Controller, 'getOpenManifest', {
    UserID: {
      type: 'int',
      required: true
    },
    AutoImport: {
      type: 'boolean'
    }
  });

  new Action(Controller, 'listConsignments', {
    ManifestID: {
      type: 'int'
    },
    ConsignmentID: {
      type: 'int'
    }
  });

  new Action(Controller, 'listCostCenters');

  new Action(Controller, 'listCustomParcelTypes', {
    UserID: {
      type: 'int'
    }
  });

  new Action(Controller, 'listManifests', {
    Type: {
      type: 'string',
      "enum": ['all', 'open', 'closed']
    },
    MultiBusinessID: {
      type: 'int'
    },
    ManifestID: {
      type: 'int'
    }
  });

  new Action(Controller, 'listMultiBusiness');

  new Action(Controller, 'list-Open-Manifests');

  new Action(Controller, 'listUsers');

  new Action(Controller, 'markConsignmentPrinted', {
    ConsignmentID: {
      type: 'int',
      required: true
    },
    UserID: {
      type: 'int',
      required: true
    }
  });

  new Action(Controller, 'markManifestComplete', {
    ManifestID: {
      type: 'int',
      required: true
    },
    UserID: {
      type: 'int',
      required: true
    }
  });

  new Action(Controller, 'removeConsignment', {
    ConsignmentID: {
      type: 'int',
      required: true
    }
  });

  new Action(Controller, 'removeConsignmentItem', {
    ConsignmentItemID: {
      type: 'int',
      required: true
    }
  });

  new Action(Controller, 'removeManifest', {
    ManifestID: {
      type: 'int',
      required: true
    }
  });

  module.exports = Controller;

}).call(this);
