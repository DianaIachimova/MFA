const defaultData = require("./data.json");
const NavData = require("../models/nav.schema");
const Partner = require("../models/partner.schema");
const SubNavData = require("../models/subNav.schema");
const Product = require("../models/products.schema");
const CategoryData = require("../models/category.schema");
const sliderTopData = require("../models/sliderTop.schema");
const sliderBottomData = require("../models/sliderBottom.schema");
const SubFooterData = require("../models/subFooter.schema");
const FooterData = require("../models/footer.schema");
const newsData = require("../models/news.schema");
const roleData = require("../models/role.schema");
const Cart = require("../models/cart.schema");
const Contact = require("../models/contact.schema");

const populateDatabse = async () => {
  await Partner.remove();
  // Populate Partners collection
  if ((await Partner.estimatedDocumentCount()) === 0) {
    await Partner.create(defaultData.partners);
    console.log(`Partners: +${defaultData.partners.length} documents`);
  }

  await Contact.remove();
  // Populate Contact collection
  if ((await Contact.estimatedDocumentCount()) === 0) {
    await Contact.create(defaultData.phoneNumbers);
    console.log(`Contact: +${defaultData.phoneNumbers.length} documents`);
  }

  await SubNavData.remove();
  // Populate SubNav collection
  if ((await SubNavData.estimatedDocumentCount()) === 0) {
    await SubNavData.create(defaultData.subNav);
    console.log(`SubNav: +${defaultData.subNav.length} documents`);
  }

  await NavData.remove();
  // Populate Nav collection
  if ((await NavData.estimatedDocumentCount()) === 0) {
    for (const item of defaultData.nav) {
      await NavData.create(item);
    }

    const records = await NavData.find();

    for (const record of records) {
      const items = await SubNavData.find({ parent: record.key });

      await NavData.findByIdAndUpdate(
        record._id,
        { $push: { items } },
        { new: true, useFindAndModify: false }
      );
    }

    console.log(`Nav: +${defaultData.nav.length} documents`);
  }

  await Product.remove();
  // Populate Products collection
  if ((await Product.estimatedDocumentCount()) === 0) {
    await Product.create(defaultData.products);
    console.log(`Products: +${defaultData.products.length} documents`);
  }

  await CategoryData.remove();
  // Populate Categories collection
  if ((await CategoryData.estimatedDocumentCount()) === 0) {
    await CategoryData.create(defaultData.category);

    const records = await CategoryData.find();

    for (const record of records) {
      await CategoryData.findByIdAndUpdate(
        record._id,
        { $push: { products: await Product.find({ parent: record.key }) } },
        { new: true, useFindAndModify: false }
      );
    }

    console.log(`Category: +${defaultData.category.length} documents`);
  }

  await sliderTopData.remove();
  // Populate SliderTop collection
  if ((await sliderTopData.estimatedDocumentCount()) === 0) {
    await sliderTopData.create(defaultData.sliderTop);
    console.log(`SliderTop: +${defaultData.sliderTop.length} documents`);
  }

  await sliderBottomData.remove();
  // Populate SliderBottom collection
  if ((await sliderBottomData.estimatedDocumentCount()) === 0) {
    await sliderBottomData.create(defaultData.sliderBottom);
    console.log(`SliderBottom: +${defaultData.sliderBottom.length} documents`);
  }

  await SubFooterData.remove();

  if ((await SubFooterData.estimatedDocumentCount()) === 0) {
    await SubFooterData.create(defaultData.subFooter);
    console.log(`SubFooter: +${defaultData.subFooter.length} documents`);
  }

  await FooterData.remove();

  if ((await FooterData.estimatedDocumentCount()) === 0) {
    await FooterData.create(defaultData.footer);

    const records = await FooterData.find();

    for (const record of records) {
      const items = await SubFooterData.find({ parent: record.key });

      await FooterData.findByIdAndUpdate(
        record._id,
        { $push: { items } },
        { new: true, useFindAndModify: false }
      );
    }

    console.log(`Footer: +${defaultData.footer.length} documents`);
  }

  await newsData.remove();

  if ((await newsData.estimatedDocumentCount()) === 0) {
    await newsData.create(defaultData.news);
    console.log(`News: +${defaultData.news.length} documents`);
  }

  await roleData.remove();

  if ((await roleData.estimatedDocumentCount()) === 0) {
    await roleData.create(defaultData.role);
    console.log(`Role: +${defaultData.role.length} documents`);
  }

  // Clear Cart data
  await Cart.remove();
};

module.exports = populateDatabse;
