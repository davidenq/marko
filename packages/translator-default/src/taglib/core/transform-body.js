import { types as t } from "@marko/babel-types";

export function exit(path) {
  if (path.hub.options.output === "html") {
    const body = path.get("body");

    body.pushContainer("body", [
      t.markoTag(t.stringLiteral("init-components"), [], t.markoTagBody()),
      t.markoTag(t.stringLiteral("await-reorderer"), [], t.markoTagBody()),
      t.markoTag(
        t.stringLiteral("_preferred-script-location"),
        [],
        t.markoTagBody()
      )
    ]);
  }
}