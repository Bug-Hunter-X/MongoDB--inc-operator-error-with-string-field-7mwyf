```javascript
// Correct use of $inc operator with a numeric field
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } });

//Alternative solution if the field is a string and needs to be converted
db.collection.findOneAndUpdate(
  { name: "John" },
  { $set: { age: parseInt(age) + 1 } },
  {returnOriginal: false}
)
```